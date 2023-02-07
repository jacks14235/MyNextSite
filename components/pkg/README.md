Adapted from tutorial: https://sotrh.github.io/learn-wgpu/beginner/tutorial1-window/

Build pkg folder from rust components with `wasm-pack build --target web`

Start server with `npm start`
* Server will automatically update files after build, no need to restart it

The canvas is created under the element with id given in run function under `#[cfg(target_arch = "wasm32")]`