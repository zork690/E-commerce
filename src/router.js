import PantallaDos from '@/components/PantallaDos.vue'
import PantallaTres from '@/components/PantallaTres.vue'
import PantallaCuatro from '@/components/PantallaCuatro.vue'
import PantallaCinco from '@/components/PantallaCinco.vue'


const routes = [
    {
        path: "/",
        name: "pantallaCuatro",
        component: PantallaCuatro
    },
    {
        path: "/pantallaDos",
        name: "pantallaDos",
        component: PantallaDos
    },
    {
        path: "/pantallaTres",
        name: "pantallaTres",
        component: PantallaTres
    },
    {
        path: "/pantallaCinco",
        name: "pantallaCinco",
        component: PantallaCinco
    }
];

export default routes