import React, {useState, useEffect, useRef} from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/client";
import { AiOutlineMenu } from "react-icons/ai"
import useSWR from "swr";

const DropDownOptions: React.FC<{session: any}> | null = ({session}) => {
  const [open,setOpen] = useState(false)
  const { data : user, error} = useSWR('/api/profile',{initialData: session.user, refreshInterval: 100})
  const {firstName, lastName} = user
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
    <div className="relative flex flex-col justify-center items-center" ref={ref}>
      <button onClick={() => setOpen(!open)} className=" text-2xl"><AiOutlineMenu/></button>
      { open ? (
        <div className="flex flex-col absolute top-50px w-44 bg-blue-400 border-1 rounded p-1 transform -translate-x-14 translate-y-20">
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
        AppName
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
const TopBar: React.FC = () => {
  const [session, loading] = useSession();
  return (
    <nav className="h-nav md:h-nav-xl">
      <div className="w-full h-full flex justify-between items-center px-10">
        <Left session={session} loading={loading}/>
        <Right session={session} loading={loading}/>
      </div>
    </nav>
  );
};

export default TopBar;
