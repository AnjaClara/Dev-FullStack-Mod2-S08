import React, { createContext, useState } from 'react';

export const BannerContext = createContext({
  banner:{
    descricao: '',
    legenda: '',
  },
  setBanner: () =>{},
})

export const BannerProvider = ({children}) => {
  const[banner, setBanner] = useState({
    descricao: 'FAÇA A PROVA',
    legenda: 'as melhores receitas estão aqui',
  })

  return(
    <BannerContext.Provider value={{banner, setBanner}}>
      {children}
    </BannerContext.Provider>
  )
}
