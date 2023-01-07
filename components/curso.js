import styles from '../styles/curso.module.css'

export default function Curso({curso}) {
    const {contenido, imagen, titulo} = curso.attributes;
  
    return (
        <section className={`${styles.curso}`}>
            {/* No hay forma de pasar imagen de javascrip a css por ello se realiza con style jsx */}
            <style jsx>{`
                .curso {
                    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${imagen?.data?.attributes?.url}');
                }
            `}</style>
            <div className={`contenedor ${styles.grid}`}>
                <div className={styles.contenido}>
                    <h2 className='heading'>{titulo}</h2>
                    <p>{contenido}</p>
                </div>
            </div>
        </section>
    )
}
