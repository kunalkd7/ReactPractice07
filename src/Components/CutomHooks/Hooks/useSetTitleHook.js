import React, { useEffect } from 'react'

export function useSetTitleHook(count) {
    useEffect(() => {
        document.title = `title ${count}`
    }, [count])
}
