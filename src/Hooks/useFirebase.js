import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const handleEmail = e => {
        setEmail(e.target.value)
        console.log(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
        console.log(e.target.value);
    }

    const userLogin = (e) => {
        e.preventDefault()
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                setError(error.message)
            });
    }

    const userRegister = () => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
            })
            .catch((error) => {
                setIsLoading(false)
                setError(error.message)
            });
    }

    const googleLogin = () => {
        setIsLoading(true)
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
                setIsLoading(false)
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    }, [])

    return {
        user,
        email,
        error,
        isLoading,
        userLogin,
        userRegister,
        logOut,
        handleEmail,
        handlePassword,
        googleLogin,


    }
};

export default useFirebase;