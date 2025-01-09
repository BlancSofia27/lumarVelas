import React, { useState, useEffect } from "react"
import { supabase } from "../utils/supabaseClient"
import { User, Eye, EyeOff } from "lucide-react"

export default function Auth() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("") // Nuevo estado para teléfono
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)
  const [session, setSession] = useState(null)

  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await supabase.auth.getSession()
      setSession(data.session)
    }
    fetchSession()
  }, [])

  const handleSignUp = async () => {
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      })

      if (error) {
        setError(error.message)
      } else {
        // Actualización del teléfono en la tabla 'users' (o donde desees almacenarlo)
        const {  error: updateError } = await supabase
          .from('users')  // Asegúrate de tener una tabla de usuarios
          .upsert([{ email, phone }])  // Agrega el campo teléfono
          
        if (updateError) {
          setError(updateError.message)
        } else {
          setSuccess(true)
          alert("Registro exitoso. Por favor, verifica tu correo electrónico.")
        }
      }
    } catch (err) {
      setError("Hubo un error al registrar. Intenta de nuevo.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleSignIn = async () => {
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) throw error
      setSuccess(true)
      alert("Inicio de sesión exitoso.")
      const { data } = await supabase.auth.getSession()
      setSession(data.session)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleSignOut = async () => {
    setLoading(true)
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      setSession(null)
      alert("Cierre de sesión exitoso.")
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const toggleForm = () => {
    setIsSignUp((prev) => !prev)
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-50 text-zinc-900 p-5">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
        <div className="flex flex-col items-center mb-6">
          <User strokeWidth={1} className="w-12 h-12 text-blue-500" />
          <h1 className="text-2xl font-bold mt-2">
            {session ? "Bienvenido" : isSignUp ? "Registrarse" : "Ingresar"}
          </h1>
        </div>

        {error && (
          <div className="bg-red-100 text-red-600 p-2 rounded mb-4">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-100 text-green-600 p-2 rounded mb-4">
            {isSignUp
              ? "Registro exitoso. Verifica tu correo."
              : "Inicio de sesión exitoso."}
          </div>
        )}

        {!session && (
          <>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                placeholder="Ingresa tu correo"
                className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:ring-blue-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {isSignUp && (
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Teléfono
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Ingresa tu teléfono"
                  className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:ring-blue-300"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            )}

            <div className="mb-6 relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Contraseña
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Ingresa tu contraseña"
                className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:ring-blue-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            <button
              onClick={isSignUp ? handleSignUp : handleSignIn}
              disabled={loading}
              className={`w-full py-2 px-4 text-white font-bold rounded ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : isSignUp
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {loading
                ? "Procesando..."
                : isSignUp
                ? "Registrarse"
                : "Ingresar"}
            </button>

            <a
              href="#"
              onClick={toggleForm}
              className="block text-center text-sm text-blue-500 mt-4"
            >
              {isSignUp
                ? "¿Ya tienes una cuenta? Inicia sesión"
                : "¿No tienes cuenta? Regístrate"}
            </a>
          </>
        )}

        {session && (
          <button
            onClick={handleSignOut}
            className="w-full py-2 px-4 mt-4 bg-red-500 text-white font-bold rounded hover:bg-red-600"
          >
            Cerrar sesión
          </button>
        )}
      </div>
    </div>
  )
}
