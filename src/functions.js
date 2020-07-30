export const hideEmail = (email) => {
    const array = email.split('@')
    array[0] = array[0].slice(0, 3) + '...' + array[0].slice(-3)

    return array.join('@')

}

export const fetchUsers = () => {
    return fetch("https://randomuser.me/api/?results=15")
        .then(resolve => resolve.json())
}
