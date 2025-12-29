import { contextBridge } from 'electron'

const electronApi = {}

export type ElectronApi = typeof electronApi
contextBridge.exposeInMainWorld('api', electronApi)
