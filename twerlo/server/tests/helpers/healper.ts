
let app;

export async function mochaGlobalSetup() {
    try {
        this.app = await import('../../src/index')
    } catch (error) {
        console.trace(error);
        console.log(
          "🚀 ~ file: setup-tear-unit.js ~ line 22 ~ mochaGlobalSetup ~ error",
          error
        );
        if (this.app) await this.app.stop();
      }
}


export async function mochaGlobalTeardown() {
    try {
        
      await this.app.stop();
    } catch (error) {
      console.log(error);
    }
  }
  