import { csrfToken } from 'next-auth/client'

export default function SignIn({ csrfToken }) {
    return (
      <section className="w-scree h-screen flex justify-center items-center">
        <div className="bg-white p-20">
          <form method='post' action='/api/auth/signin/email'>
            <div className="flex flex-col items-center">
              <input name='csrfToken' type='hidden' defaultValue={csrfToken}/>
              <label className="flex flex-col m-5">
                Email:
                <input className="bg-blue-100" type='text' id='email' name='email'/>
              </label>
              <button type='submit' className="p-2 w-2/5 h-12 bg-blue-600 text-white rounded">Sign in</button>
            </div>
          </form>
        </div>
      </section>
    )
}
SignIn.getInitialProps = async (context) => {
    return {
        csrfToken: await csrfToken(context)
    }
}