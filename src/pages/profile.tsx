import React, {useEffect, useState} from "react";
import {getSession, useSession} from "next-auth/client";
import {useRouter} from "next/router";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import Layout from "../components/Layout";
import {updateUser} from "../api/client/profile";
import {GetServerSideProps} from "next";
import {getUser} from "../api/server/profile";
import useSWR from "swr";
import {User, UserParams} from "../types/user";

export const getServerSideProps: GetServerSideProps = async ({req, res}) => {
  const session = await getSession({req})
  if (session) {
    const user = await getUser(session)
    return {
      props: {
        user: JSON.parse(JSON.stringify(user))
      }
    }
  }
  else
    return {
      props: {
        user: null
      }
    }
};

const InputField: React.FC<{label: string, name: string}> = ({label, name ="text"}) => {
  return (
    <div>
      <span className="text-sm">{label}</span>
      <Field className="bg-purple-300 text-purple-900 rounded-lg p-2 w-full" name={name} type={name}/>
    </div>
  )
}
const Profile: React.FC<{user:User}> = (props) => {
  const [session, loading] = useSession();
  const [user, setUser] = useState<User>(props.user)
  const router = useRouter();
  const { data , error} = useSWR<any>('/api/profile', {initialData: props.user, refreshInterval: 0})
  useEffect(() => {
    return setUser(data);
  },[loading])

  if (session){
    const { firstName, lastName, role } = data
    return (
      <Layout>
        <section className="w-full h-full flex justify-start items-center flex-col">
          <div className="bg-white w-11/12 m-5 p-5 rounded-xl">
            <h1>Tu perfil, {firstName} {lastName}</h1>
          </div>
          {role === "Admin" ? (<h1 className="text-white">Eres Administrador</h1>) : null}
          <div className="w-11/12 h-full m-5 p-5 bg-white rounded-xl">
            <Formik
              initialValues={{firstName: user.firstName || "", lastName: user.lastName || ""}}
              validationSchema={Yup.object({
                firstName: Yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid name').max(15).required('You must have a name'),
                lastName: Yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid name').max(20).required('Do you have a last name?')
              })}
              onSubmit={(values: UserParams) => {
                if (firstName != values.firstName || lastName != values.lastName)
                  updateUser(values).then(response => {
                    console.log(response)
                  })
              }}>
              <Form className="h-full flex flex-col justify-around items-center">
                <div>
                  <div className="flex flex-col">
                    <span><ErrorMessage name="firstName"/></span>
                    <span><ErrorMessage name="lastName"/></span>
                  </div>
                  <div className="flex flex-col justify-between items-center">
                    <InputField label="Nombre" name="firstName"/>
                    <InputField label="Apellido" name="lastName"/>
                  </div>
                </div>
                <button className="bg-green-200 p-2 shadow-xl rounded-lg" type="submit">Update my Profile</button>
              </Form>
            </Formik>
          </div>
        </section>
      </Layout>
    )
  }
  if (!session && !loading) router.push('/auth/email')
    return null;
}

export default Profile