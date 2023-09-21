import React from "react"

import {
  Tabs,
  Tab,
  Input,
  Link,
  Button,
  Card,
  CardBody,
  CardHeader,
} from "@nextui-org/react"

export default function App() {
  const [selected, setSelected] = React.useState("login")
  const variants = ["flat", "bordered", "underlined", "faded"]

  return (
    <div className='flex flex-col w-full flex-1'>
      <Card className='max-w-full w-[340px] h-[400px]'>
        <CardBody className='overflow-hidden'>
          <Tabs
            fullWidth
            size='md'
            aria-label='Tabs form'
            selectedKey={selected}
            onSelectionChange={setSelected}
          >
            <Tab
              key='login'
              title='Login'
            >
              <form className='flex flex-col gap-4'>
                <Input
                  type='email'
                  variant={"underlined"}
                  label='Email'
                />

                <Input
                  type='password'
                  variant={"underlined"}
                  label='Password'
                />
                <p className='text-center text-small'>
                  Need to create an account?{" "}
                  <Link
                    size='sm'
                    onPress={() => setSelected("sign-up")}
                  >
                    Sign up
                  </Link>
                </p>
                <div className='flex gap-2 justify-end'>
                  <Button
                    fullWidth
                    color='primary'
                  >
                    Login
                  </Button>
                </div>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  )
}
