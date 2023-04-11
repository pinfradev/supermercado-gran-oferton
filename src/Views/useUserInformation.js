import React from "react"
import profileUser from '../assets/profile-user.png'

function useUserInformation() {
    const [user, setUser] = React.useState({})
    const [shouldFetchUser, setShouldFetchUser] = React.useState(false)
    
    React.useEffect(() => {
        setUser(defaultUser)
    }, [shouldFetchUser])

    return [user, setShouldFetchUser]
}

const defaultUser = {
    userName: 'Don quijote de la Mancha',
    profileUrl: profileUser
}

export {useUserInformation}