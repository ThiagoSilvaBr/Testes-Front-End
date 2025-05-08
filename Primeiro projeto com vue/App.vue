<script>
export default {
  data() {
    return {
      //nome: "",
      senha1: "",
      senha2: "",
      pessoas: [
        { nome: "Thiago", idade: 19 },
        { nome: "Camila", idade: 19 },
        { nome: "Gui", idade: 20 },
        { nome: "Marcelo", idade: 18 },
        { nome: "Matheus", idade: 19 },
      ],
    };
  },
};
</script>

<template>
  <!-->
  <div class="mt-4">
    <input v-model="nome" />
    <h1>{{ nome }}</h1>
  </div>

  <div class="mt-2">
    <h1 v-if="nome == 'Thiago'">É o professor.</h1>

    <h1 v-if="nome != 'Thiago'">É o aluno.</h1>
  </div>
<!-->

  <div class="container">
    <div class="card">
      <div class="card-body">
        <div>
          <label>Digite seu email</label>
          <input class="form-control" placeholder="Digite seu email..." />
        </div>
        <div class="mt-2">
          <label>Digite uma senha</label>
          <input
            type="password"
            class="form-control"
            placeholder="Digite sua senha..."
            v-model="senha1"
          />
        </div>
        <div class="mt-2">
          <label>Confirme sua senha</label>
          <input
            type="password"
            class="form-control"
            placeholder="Confirme sua senha..."
            v-model="senha2"
          />
        </div>
        <span>
          <h6 v-if="senha2 != senha1" class="cor">
            As senhas são diferentes!!!
          </h6>
        </span>
        <div class="mt-2" style="float: right">
          <button class="btn btn-dark btn-sm">Enviar</button>
        </div>
      </div>
    </div>
  </div>

  <div class="container mt-4">
    <div class="card">
      <div class="card-body">
        <div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Idade</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="pessoa in pessoas">
                <td>{{ pessoa.nome }}</td>
                <td>{{ pessoa.idade }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.centralizar {
  display: flex;
  align-content: center;
  align-items: center;
  margin: 50px;
}

.cor {
  color: red;
}
</style>
