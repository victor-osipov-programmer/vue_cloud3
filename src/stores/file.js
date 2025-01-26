import { query } from "@/api/query";
import { ref } from "vue";

export const files = ref([])

export function getFiles() {
    query('/files/disk')
    .then(response => response.json())
    .then(json => {
        console.log(json);
        
    })
}