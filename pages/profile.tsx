import React, {useEffect, useState} from "react";
import {useSession} from "next-auth/client";
import {useRouter} from "next/router";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import Layout from "../components/Layout";
import {updateUser} from "../requests/client/profile";

const Profile = () => {
  const [session, loading] = useSession();
  const [user, setUser] = useState(session?.user)
  const router = useRouter();
  useEffect(() => {
    setUser(session?.user)
  },[loading])
  if (session && user){
    const { firstName, lastName, role } = user
    return (
      <Layout>
        <h1>Mi perfil</h1>
        {role === "Admin" ? (<h1>Eres Administrador</h1>) : null}
        <section className="p-10 flex justify-center items-center">
          <Formik
            initialValues={{firstName:firstName || "", lastName:lastName || ""}}
            validationSchema={Yup.object({
              firstName: Yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid name').max(15).required('You must have a name'),
              lastName: Yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid name').max(20).required('Do you have a last name?')
            })}
            onSubmit={(values) => {
              if (firstName != values.firstName || lastName != values.lastName)
                updateUser(values).then(response => {
                  setUser(response)
                  //TODO Handle user data change and change state
                })
            }}>
            <Form>
              <div>
                <div className="flex flex-col">
                  <span><ErrorMessage name="firstName"/></span>
                  <span><ErrorMessage name="lastName"/></span>
                </div>
                <div className="flex flex-col justify-between items-center">
                  <div>
                    <span>Nombre: </span>
                    <Field className="" name="firstName" type="text"/>
                  </div>
                  <div>
                    <span>Apellido: </span>
                    <Field className="" name="lastName" type="text"/>
                  </div>
                </div>
              </div>
              <button type="submit">Go</button>
            </Form>
          </Formik>
        </section>
      </Layout>
    )
  }
  if (!session && !loading) router.push('/auth/email')
    return null;
}

export default Profile