import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { clearTokens, getAccessToken } from "../utils/auth.js";

function Navbar() {
    const { cartItems } = useCart();
    const navigate = useNavigate();

    const cartCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const isLoggedIn = !!getAccessToken();

    const handleLogout = () => {
        clearTokens();
        navigate("/login");
    };

    return (
        <nav className="bg-cyan-700 shadow-xl px-10 py-5 flex items-center justify-between">

            {/* Logo */}
            <Link
                to="/"
                className="text-3xl font-extrabold text-white tracking-wide"
            >
                🛍️ MunnaCart
            </Link>

            {/* Right Side */}
            <div className="flex items-center gap-6">

                {!isLoggedIn ? (
                    <>
                        <Link
                            to="/login"
                            className="text-white font-semibold hover:text-yellow-300 transition"
                        >
                            Login
                        </Link>

                        <Link
                            to="/signup"
                            className="
                bg-white
                text-violet-600
                px-5
                py-2
                rounded-xl
                font-semibold
                hover:scale-105
                transition
              "
                        >
                            Sign Up
                        </Link>
                    </>
                ) : (
                    <button
                        onClick={handleLogout}
                        className="
              text-white
              font-semibold
              hover:text-yellow-300
              transition
            "
                    >
                        Logout
                    </button>
                )}

                {/* Cart */}
                <Link
                    to="/cart"
                    className="
            relative
            bg-white/20
            text-white
            px-5
            py-2
            rounded-xl
            hover:bg-white/30
            transition
          "
                >
                    🛒 Cart

                    {cartCount > 0 && (
                        <span
                            className="
                absolute
                -top-2
                -right-2
                bg-yellow-400
                text-black
                text-xs
                font-bold
                min-w-[22px]
                h-[22px]
                flex
                items-center
                justify-center
                rounded-full
              "
                        >
                            {cartCount}
                        </span>
                    )}
                </Link>

            </div>
        </nav>
    );
}

export default Navbar;