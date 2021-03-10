import { providers, signIn } from 'next-auth/client'

export default function Providers({ providers }) {
    return (
      <div>
          {
              Object.values(providers).map((provider,index) => {
                  if (provider.type !== 'email') {
                      return(
                        <div key={index}>
                            <div key={provider.name}/>
                            <button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
                        </div>
                      )
                  }
              })
          }
      </div>
    )
}

Providers.getInitialProps = async () => {
    return {
        providers: await providers()
    }
}