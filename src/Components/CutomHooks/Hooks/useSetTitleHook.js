import React, { useEffect } from 'react'

export function useSetTitleHook(count) {
  return useEffect(() => {
        document.title = `title ${count}`
    }, [count])
}
