import React, {useState, useEffect, useRef} from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/client";

const DropDownOptions: React.FC | null = () => {
  const [open,setOpen] = useState(false)
  const ref = useRef(null)
  const useOutsideClick = (ref) => {
    useEffect(() => {
      const handleOutsideClick = (event) => {
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
        <div className="absolute top-50px w-40 bg-blue-400 border-1 rounded p-1 transform -translate-x-7 translate-y-7">
          <Link href="/profile">
            My Profile
          </Link>
        </div>
      ): null
      }
    </div>
  )
}

const Left: React.FC<{session,loading}> | null = ({session, loading}) => {
  if (session) {
    const {firstName, lastName} = session.user
    return (
      <div>
        Welcome! {firstName} {lastName}
      </div>
    )
  }
  return null
}

const Right: React.FC<{session, loading}> | null = ({session, loading}) => {
  if (session) {
    return (
      <div>
        <DropDownOptions/>
      </div>
    )
  }
  return null
}
const NavBar: React.FC = () => {
  const router = useRouter();
  const [session, loading] = useSession();
  const isActive: (pathname: string) => boolean = (pathname) => router.pathname === pathname;
  return (
    <nav className="h-1/12">
      <div className="flex justify-between px-10 py-5">
        <Left session={session} loading={loading}/>
        <Right session={session} loading={loading}/>
      </div>
    </nav>
  );
};

export default NavBar;
