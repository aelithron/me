import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export function HomeButton() {
  return (
    <Link href={"/"} className="flex sticky w-fit items-center gap-2 p-2 bg-violet-600 border-violet-800 border-2 rounded-3xl">
      <FontAwesomeIcon icon={faHome} />
      Go Home
    </Link>
  )
}