import React from "react"

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react"
import { AcmeLogo } from "../public/AcmeLogo"

export default function App() {
  return (
    <Navbar>
      <NavbarBrand>
        <AcmeLogo />
        <p className='font-bold text-inherit'>Uee OJ</p>
      </NavbarBrand>
      <NavbarContent
        className='hidden sm:flex gap-4'
        justify='center'
      >
        <NavbarItem>
          <Link
            color='foreground'
            href='#'
          >
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            href='#'
            aria-current='page'
          >
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color='foreground'
            href='#'
          >
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <Link href='/auth/login'>Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color='primary'
            href='/auth/register'
            variant='flat'
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
