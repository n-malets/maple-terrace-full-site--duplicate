import React, { Dispatch, SetStateAction } from "react"

interface IContextProps {
  openContact: boolean
  setOpenContact: Dispatch<SetStateAction<boolean>>
  openLegal: boolean
  setOpenLegal: Dispatch<SetStateAction<boolean>>
  openTeam: boolean
  setOpenTeam: Dispatch<SetStateAction<boolean>>
}

export const Context = React.createContext<IContextProps>({
  openContact: false,
  setOpenContact(value: ((prevState: boolean) => boolean) | boolean): void {
    /* **/
  },
  openLegal: false,
  setOpenLegal(value: ((prevState: boolean) => boolean) | boolean): void {
    /* **/
  },
  openTeam: false,
  setOpenTeam(value: ((prevState: boolean) => boolean) | boolean): void {
    /* **/
  },
})
