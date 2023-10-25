'use client'
import { ButtonComponent } from "@/components/button-component";
import LayoutComponent from "@/components/layout-component";
import { useData } from "@/interfaces/use-data";
import axios from "axios";
import { useEffect, useState } from "react";
  
const API_URL = "https://localhost:7065";


export default function ManageProduct() {
  const [ data, setData ] = useState<useData[]>([]);

  const fetchData = async () => {
    const response = await axios.get(API_URL + "/api/User")
    setData(response?.data)
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <LayoutComponent>
      <h1 className="text-4xl mb-8">Meus produtos</h1>

      <div className="flex justify-end">
        <ButtonComponent 
          type="submit" 
          className="h-10 rounded-lg border text-blue-200 border-blue-200 text-sm font-sans p-2 mb-6" 
          children="+ Adicionar Produto"         
        />
      </div>

      <div className="flex bg-gray-100 w-full p-4 rounded-lg ">
        <p className="mr-24">Produto</p>
        <p className="mr-24">Preço</p>
        <p className="mr-24">Descrição</p>
        <p className="mr-24">Tipo</p>
        <p className="mr-24">Cód.Produto</p>
      </div>
      <>
        {data?.map(data => (
            <div key={data.id}>
                <h1>{data.name}</h1>
            </div>
            ))}
      </>
    </LayoutComponent>
  )
}