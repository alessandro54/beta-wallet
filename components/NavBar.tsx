import React, {useState, useEffect, useRef} from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/client";

const DropDownOptions: React.FC<{session: any}> | null = ({session}) => {
  const [open,setOpen] = useState(false)
  const {firstName, lastName} = session.user
  const ref = useRef(null)
  const useOutsideClick = (ref: any) => {
    useEffect(() => {
      const handleOutsideClick = (event: { target: any; }) => {
        if (ref.current && !ref.current.contains(event.target))
          setOpen(false)
      }
      document.addEventListener("mousedown", handleOutsideClick)
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick)
      }
    }, [ref])
  }
  useOutsideClick(ref)
  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen(!open)}>Options</button>
      { open ? (
        <div className="flex flex-col absolute top-50px w-60 bg-blue-400 border-1 rounded p-1 transform -translate-x-40 translate-y-2">
          <div>
            {firstName} {lastName}
          </div>
          <Link href="/profile">
            My Profile
          </Link>
          <a onClick={() => signOut()}>
            Log out
          </a>
        </div>
      ): null
      }
    </div>
  )
}

const Left: React.FC<{session: any,loading: any}> | null = ({session, loading}) => {
  if (session) {
    return (
      <Link href="/">
        Welcome! to AppName
      </Link>
    )
  }
  return (
    <div>

    </div>
  )
}

const Right: React.FC<{session: any, loading: any}> | null = ({session, loading}) => {
  if (!session)
    return (
      <div>
        <div>
        </div>
        <Link href="/auth/email">
          Log in
        </Link>
      </div>
    )

  if (session)
    return (
      <div>
        <DropDownOptions session={session}/>
      </div>
    )
  return null
}
const NavBar: React.FC = () => {
  const [session, loading] = useSession();
  return (
    <nav className="h-nav xl:h-nav-xl">
      <div className="flex justify-between px-10 py-5">
        <Left session={session} loading={loading}/>
        <Right session={session} loading={loading}/>
      </div>
    </nav>
  );
};

export default NavBar;
