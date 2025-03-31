import { ref, computed } from 'vue'

export function usePaquetes() {
  const paquetes = [
    {
      nombre: "Paquete Matrimonial Estandar",
      precio: "Bs 185",
      descripcion:
        "Un evento elegante y accesible. Incluye salón decorado, mesas, sillas, música ambiental y servicio básico para una boda inolvidable.",
      image:
        "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082039/Captura_de_pantalla_2025-02-13_080929_kuxmjx.jpg",
      category: "matrimonios",
      tipo: 'boda',
            slug: "paquete-matrimonial-estandar"
    },
    {
      nombre: "Paquete Matrimonial Gold",
      precio: "Bs 190",
      descripcion:
        "Un equilibrio perfecto entre lujo y precio. Añade decoración premium, iluminación especial, catering selecto y sonido profesional.",
      image:
        "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082038/received_990762377781067_aahmr8.jpg",
      category: "matrimonios",
      tipo: 'boda',

      slug: "paquete-matrimonial-gold"
    },
    {
      nombre: "Paquete Matrimonial Platinum",
      precio: "Bs 220",
      descripcion:
        "La boda de tus sueños con todos los lujos. Servicio VIP, banquete gourmet, iluminación personalizada, sonido profesional y más.",
      image:
        "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082038/SaveClip.App_37598889_265211824076485_479068567820566528_n_w4q6rt.jpg",
      category: "matrimonios",
      tipo: 'boda',

      slug: "paquete-matrimonial-platinum"
    },
    {
      nombre: "Paquete Quince Años Estandar",
      precio: "Bs 160",
      descripcion:
        "Una celebración hermosa y accesible. Incluye salón decorado, mesas, sillas, música ambiental y atención básica para un día inolvidable.",
      image:
        "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082152/478990134_1141698550731234_4863281091107801233_n_sssouh.jpg",
      category: "quinceanos",
      slug: "paquete-quince-anos-estandar"
    },
    {
      nombre: "Paquete Quince Años Gold",
      precio: "Bs 170",
      descripcion:
        "Un festejo con más brillo. Incluye decoración temática, iluminación especial, catering selecto y un show de entrada espectacular.",
      image:
        "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082149/SaveClip.App_81585373_160842461923771_8576567447727770476_n_fjhvjg.jpg",
      category: "quinceanos",
      tipo: 'cumpleaños',

      slug: "paquete-quince-anos-gold"
    },
    {
      nombre: "Paquete Quince Años Platinum",
      precio: "Bs 190",
      descripcion:
        "Un evento de ensueño con todos los lujos. Servicio VIP, banquete gourmet, pista iluminada, show de entrada espectacular y sorpresas únicas.",
      image:
        "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082151/479487023_1142232350677854_5400312498081089072_n_xenukc.jpg",
      category: "quinceanos",
      tipo: 'cumpleaños',
      slug: "paquete-quince-anos-platinum"
    },
    {
      nombre: "Paquete Eventos Privados Estandar",
      precio: "Bs 160",
      descripcion:
        "Una celebración sencilla y especial. Incluye salón decorado, mesas, sillas, música ambiental y servicio básico para tu evento.",
      image:
        "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082121/Captura_de_pantalla_2025-02-13_080720_yluxe0.jpg",
      category: "eventosprivados",
      tipo: 'corporativo',
      slug: "paquete-eventos-privados-estandar"
    },
    {
      nombre: "Paquete Eventos Privados Gold",
      precio: "Bs 180",
      descripcion:
        "Un evento con más estilo. Decoración personalizada, iluminación especial, catering variado y sonido profesional para una experiencia única.",
      image:
        "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082120/SaveClip.App_38194810_227566937927616_865769800901591040_n_kynn9k.jpg",
      category: "eventosprivados",
      tipo: 'corporativo',
      slug: "paquete-eventos-privados-gold"
    },
    {
      nombre: "Paquete Eventos Privados Platinum",
      precio: "Bs 210",
      descripcion:
        "Un evento inolvidable con todos los detalles. Banquete gourmet, sonido profesional, iluminación espectacular y servicio VIP para tus invitados.",
      image:
        "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082118/IMG-20180827-WA0010_psttr5.jpg",
      category: "eventosprivados",
      tipo: 'corporativo',
      slug: "paquete-eventos-privados-platinum"
    },
    {
      nombre: "Paquete Eventos Corporativos",
      precio: "Bs 160",
      descripcion:
        "El espacio ideal para graduaciones, seminarios, ferias, etc. Salón amplio, equipamiento audiovisual, catering opcional y servicio profesional.",
      image:
        "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082087/IMG_20210403_121803_317_zlmnxc.jpg",
      category: "eventoscorporativos",
      tipo: '',
      slug: "paquete-eventos-corporativos"
    },
  ]
  
  const categories = [
    { label: "Matrimonios", value: "matrimonios" },
    { label: "Quince Años", value: "quinceanos" },
    { label: "Eventos Privados", value: "eventosprivados" },
    { label: "Eventos Corporativos", value: "eventoscorporativos" },
  ]
  
  const selectedCategory = ref("matrimonios")
  
  const filteredPackages = computed(() => {
    return paquetes.filter(
      (paquete) => paquete.category === selectedCategory.value
    )
  })
  
  const getPaqueteBySlug = (category, slug) => {
    return paquetes.find(
      (paquete) => paquete.category === category && paquete.slug === slug
    )
  }
  
  return {
    paquetes,
    categories,
    selectedCategory,
    filteredPackages,
    getPaqueteBySlug
  }
}