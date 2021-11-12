/* eslint-disable react-hooks/exhaustive-deps */
import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext, ReactNode } from "react";

type SidebarDrawerContextData =  UseDisclosureReturn;
const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

type SidebarDrawerContextProviderProps = {
  children: ReactNode
}
export function SidebarDrawerContextProvider({children}:SidebarDrawerContextProviderProps){
  const disclosure = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    disclosure.onClose()
  }, [router.asPath])

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)

