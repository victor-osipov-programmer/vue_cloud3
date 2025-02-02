import { query } from "@/api/query";
import { downloadBlob } from "@/utils";
import { ref } from "vue";

export const files = ref([])
export const shared_files = ref([])

export async function getFiles() {
    const response = await query('/files/disk')
    const json = await response.json()
    files.value = json.data ?? []
}

export async function getSharedFiles() {
    const response = await query('/shared')
    const json = await response.json()
    shared_files.value = json ?? []
}

export function downloadFile(file) {
    query('/files/' + file.file_id)
    .then(response => response.blob())
    .then(blob => {
        downloadBlob(blob, file.name)
    })
}