function useInitFomData() {
    const formdata = {
        a: "",
        b: true,
        c: ""
    }
    getformData: () => {
        return formdata
    }
    setformData: (a, b, c) => {
        formdata.a = a
        formdata.b = b
        formdata.c = c
    }
    return {
        getformData,
        setformData
    }
}
export {
    useInitFomData
}