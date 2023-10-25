"use client"

import { useEffect, useState } from "react";
import { ButtonComponent } from "@/components/button-component";
import { useUsersData } from "@/hooks/useUsersData";
import { PrimaryInputSearchIcon } from "@/components/primary-input";
import Logos from "../../assets/imageLogo.png"
import Image from "../../../node_modules/next/image";
import { useRouter } from "../../../node_modules/next/navigation";

type LoginForm = {
  email: string;
  password: string;
};

export function Login() {
  const [name, setName] = useState<string>()
  const [senha, setSenha] = useState<number>()
  const { mutate, isSuccess, isLoading } = useUsersData()
  const router = useRouter()
  
  const handleNavigate = () => {
    router.push('/users')
  }

  const submit = () => {
    router.push('/manageProduct')
  }

  return (
    <>
      <div className="container-fluid">
        <div className="flex h-screen">
          <div
            className="hidden w-3/4 h-auto bg-blue-100 bg-cover lg:block "
          >
            <Image src={Logos} alt="logos" className="flex m-auto mt-20"/>
          </div>
          <div className="flex flex-col p-8 justify-center w-full bg-white lg:w-1/2">
            <h1 className="mb-4 py-10 text-5xl font-semibold text-gray-700 text-center">
              Bem-vindo (a)
            </h1>
            <div>
              <div className="flex flex-col mb-4">
                <label className="mb-2 ml-2 font-semibold text-gray-600 text-sm">
                  Email
                </label>
                <div className="flex relative">
                  <span className="flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    
                  </span>
                  <PrimaryInputSearchIcon
                    updateValue={setSenha}
                    type="email"
                    className="h-10 w-full border-gray-300 border rounded-lg pl-10 text-gray-600"
                    placeholder="
                    Email"
                    
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label className="mb-2 ml-2 font-semibold text-gray-600 text-sm">
                  Password
                </label>
                <div className="flex relative">
                  <div className="cursor-pointer">
                    <span className="flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    </span>
                  </div>
                  <div className="w-full">
                    <PrimaryInputSearchIcon
                      updateValue={setSenha}
                      className="h-10 w-full border-gray-300 border rounded-lg pl-10 text-gray-600"
                      placeholder="Password"
                    />
                  </div>
                </div>
              </div>
            </div>
                <div className="flex flex-col mb-6">
                <ButtonComponent 
                  type="submit" 
                  className="h-10 rounded-lg bg-blue-50 text-gray-50 text-lg font-sans font-semibold" 
                  onClick={submit}
                  children="Enviar" 
                />
              </div>            
          </div>
        </div>
      </div>
    </>
  );
}