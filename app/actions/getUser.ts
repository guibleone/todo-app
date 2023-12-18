import getSession from "./getSession"

const getCurrentUser = async () => {
    const session = await getSession()

    if (!session) return null

    return session.user

}