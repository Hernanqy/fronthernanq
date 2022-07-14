import { usePosts } from "../context/postContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


export function CardItem({ post }) {
  const navigate = useNavigate();

  const { deletePost } = usePosts();
  const handleDelete = (id) => {
    toast(
      (t) => (
        <div>
          <p className="text-white">
            Estas seguro de eliminar? <strong>{post.id}</strong>
          </p>
          <div>
            <button
              className="bg-red-500 hover:bg-red-400 px-3 py-2 text-sm text-white rounded-sm mx-2"
              onClick={() => {
                deletePost(id);
                navigate("/");
                toast.dismiss(t.id);
              }}
            >
              Eliminar
            </button>
            <button
              className="bg-slate-400 hover:bg-slate-500 px-3 py-2 text-white rounded-sm mx-2 cursor-pointer ease-in"
              onClick={() => toast.dismiss(t.id)}
            >
              Cancelar
            </button>
          </div>
        </div>
      ),
      {
        style: {
          background: "#202020",
        },
      }
    );
  };
  return (
    <>
      <li className="cards__item">
        <div
          className="cards__item__link text-lg text-center text-white bg-slate-500"
          to="#"
        >
          <figure
            className="cards__item__pic-wrap  "
            data-category={post.title}
          >
            <img className="cards__item__img scale-90 " alt="" src={post.image} />
          </figure>
          <div className="flex justify-start ">
            <h5 className="cards__item__text text-white font-mono text-3xl p-5">{post.body}</h5>
            </div>
<div className="cards__item__info flex  justify-end p-1 m-1">
            <button
              className="bg-red-500 text-sm px-2 py-1 rounded-xl ease-in m-1"
              onClick={() => handleDelete(post.id)}
            >
              Eliminar
            </button>

            <button
              className="bg-indigo-400 text-sm px-2 py-1 rounded-xl ease-in m-1 "
              onClick={() => navigate(`/posts/${post.id}`)}
            >
              Editar
            </button>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
