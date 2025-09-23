"use client"

import { useEffect, useState, createContext, useContext } from "react"
import { isLowEndDevice } from "@/lib/perf"

const PerfContext = createContext({ lowPower: false, setLowPower: (v: boolean) => {} })

export function usePerf() {
  return useContext(PerfContext)
}

export function PerfProvider({ children }: { children: React.ReactNode }) {
  const [lowPower, setLowPower] = useState(false)

  useEffect(() => {
    const detected = isLowEndDevice()
    setLowPower(detected)
    try {
      if (detected) document.documentElement.classList.add("low-power")
      else document.documentElement.classList.remove("low-power")
    } catch (e) {}
  }, [])

  useEffect(() => {
    try {
      if (lowPower) document.documentElement.classList.add("low-power")
      else document.documentElement.classList.remove("low-power")
    } catch (e) {}
  }, [lowPower])

  return <PerfContext.Provider value={{ lowPower, setLowPower }}>{children}</PerfContext.Provider>
}
