import init,{greet} from "./wasm-life/pkg/wasm_life";

init().then(() => {
	greet()
})