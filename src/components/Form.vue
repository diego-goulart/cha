<template>
        <div>
            <div v-if="!formSubmitted" class="panel panel-default" style="border: 0; margin-bottom: 2px;">
                <div class="panel-body">
                    <img src="../../src/assets/header.jpeg" class="img-responsive img-rounded" alt="Chá de Mulheres" height="300">
                </div>
            </div>
            <div class="panel panel-default">
                <div class="panel-body">
                    <form @submit.prevent="validateBeforeSubmit" v-if="!formSubmitted">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group" :class="{'has-error': errors.has('name') }">
                                    <label class="control-label" for="name">Nome</label>
                                    <input v-model="name"
                                           name="name"
                                           v-validate.initial="name"
                                           data-vv-rules="required|min:3"
                                           class="form-control" type="text"
                                           placeholder="Digite seu nome completo">
                                    <p class="text-danger" v-if="errors.has('name')">{{ errors.first('name') }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group" :class="{'has-error': errors.has('cpf') }">
                                    <label class="control-label" for="cpf">CPF</label>
                                    <input v-model="cpf"
                                           name="cpf"
                                           v-validate.initial="cpf"
                                           data-vv-rules="required|numeric|max:11"
                                           class="form-control" type="number"
                                           placeholder="CPF" maxlength="11">
                                    <span class="help-block" v-if="!errors.has('cpf')">Digite somente números</span>
                                    <p class="text-danger" v-if="errors.has('cpf')">{{ errors.first('cpf') }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <label class="control-label">Data de Nascimento</label>
                            </div>
                            <div class="col-xs-3">
                                <div class="form-group" :class="{'has-error': errors.has('dia') }">
                                    <input v-model="dia"
                                           name="dia"
                                           v-validate.initial="dia"
                                           data-vv-rules="required|numeric|max_value:31|min_value:01"
                                           class="form-control" type="number"
                                           placeholder="DD">

                                </div>
                            </div>
                            <div class="col-xs-3">
                                <div class="form-group" :class="{'has-error': errors.has('mes') }">
                                    <input v-model="mes"
                                           name="mes"
                                           v-validate.initial="mes"
                                           data-vv-rules="required|numeric|max_value:12|min_value:01"
                                           class="form-control" type="number"
                                           placeholder="MM">

                                </div>
                            </div>
                            <div class="col-xs-3">
                                <div class="form-group" :class="{'has-error': errors.has('ano') }">
                                    <input v-model="ano"
                                           name="ano"
                                           v-validate.initial="ano"
                                           data-vv-rules="required|digits:4|max_value:2017|min_value:1910"
                                           class="form-control" type="number"
                                           placeholder="AAAA">

                                </div>
                            </div>
                            <div class="col-xs-12">
                                <input :value="nascimento"
                                       name="nascimento"
                                       v-validate.initial="nascimento"
                                       data-vv-rules="required|date_format:DD-MM-YYYY"
                                       class="form-control" type="hidden">
                                <p class="text-danger" v-if="errors.has('dia')">{{ errors.first('dia') }}</p>
                                <p class="text-danger" v-if="errors.has('mes')">{{ errors.first('mes') }}</p>
                                <p class="text-danger" v-if="errors.has('ano')">{{ errors.first('ano') }}</p>
                                <p class="text-danger" v-if="errors.has('nascimento')">{{ errors.first('nascimento') }}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group" :class="{'has-error': errors.has('telefone') }">
                                    <label class="control-label" for="telefone">Telefone</label>
                                    <input v-model="telefone"
                                           name="telefone"
                                           v-validate.initial="telefone"
                                           data-vv-rules="required|numeric|max:11"
                                           class="form-control" type="tel"
                                           placeholder="Telefone"
                                           maxlength="11">
                                    <span class="help-block" v-if="!errors.has('telefone')">Digite somente números</span>
                                    <p class="text-danger" v-if="errors.has('telefone')">{{ errors.first('telefone') }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group" :class="{'has-error': errors.has('whatsapp') }">
                                    <label class="control-label" for="whatsapp">Whatsapp</label>
                                    <input v-model="whatsapp"
                                           name="whatsapp"
                                           v-validate.initial="whatsapp"
                                           data-vv-rules="required|numeric|max:11"
                                           class="form-control" type="tel"
                                           placeholder="Whatsapp"
                                           maxlength="11">
                                    <span class="help-block" v-if="!errors.has('whatsapp')">Digite somente números</span>
                                    <p class="text-danger" v-if="errors.has('whatsapp')">{{ errors.first('whatsapp') }}</p>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group" :class="{'has-error': errors.has('casada') }">
                                    <label class="control-label" for="casada">Você é casada?</label>

                                    <select class="form-control"
                                            v-model="casada"
                                            v-validate.initial="casada"
                                            data-vv-rules="required|in:sim,nao"
                                            name="casada">
                                        <option value="sim">Sim</option>
                                        <option value="nao">Não</option>
                                    </select>
                                    <p class="text-danger" v-if="errors.has('casada')">{{ errors.first('casada') }}</p>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group" :class="{'has-error': errors.has('igreja') }">
                                    <label class="control-label" for="igreja">Você frequenta alguma igreja ou participa de algum ministério?</label>

                                    <select class="form-control"
                                            v-model="igreja"
                                            v-validate.initial="igreja"
                                            data-vv-rules="required|in:sim,nao"
                                            name="igreja">
                                        <option value="sim">Sim</option>
                                        <option value="nao">Não</option>
                                    </select>
                                    <p class="text-danger" v-if="errors.has('igreja')">{{ errors.first('igreja') }}</p>
                                </div>
                            </div>
                        </div>

                        <div class="row" v-if="igreja === 'sim'">
                            <div class="col-xs-12">
                                <div class="form-group" :class="{'has-error': errors.has('igreja_nome') }">
                                    <label class="control-label" for="igreja_nome">Nome da igreja</label>
                                    <input v-model="igreja_nome"
                                           igreja_nome="igreja_nome"
                                           class="form-control" type="text"
                                           placeholder="Nome da igreja ou ministerio que você participa">
                                    <p class="text-danger" v-if="errors.has('igreja_nome')">{{ errors.first('igreja_nome') }}</p>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-xs-12">
                                <button class="btn btn-primary btn-block" type="submit" :disabled="errors.any() ">Registrar</button>
                            </div>
                        </div>

                    </form>
                    <div v-else>
                        <div class="row">
                            <h3 class="text-center text-success">Parabéns!!</h3>
                            <p class="text-center">Sua inscrição foi realizada com <strong class="text-success">sucesso</strong></p>
                            <br>
                            <table class="table">
                                <thead>
                                <tr>
                                    <th>Valor da Inscrição</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><strong class="text-danger">R$15,00</strong> - (A ser pago na entrada)</td>
                                </tr>
                                </tbody>
                            </table>
                            <br/>
                            <p><strong>Abertura:</strong><span class="text-danger"> 15:09 hs</span> - <strong>Ministração:</strong><span class="text-danger"> 16:00 hs</span></p>
                            <br/>
                            <p><strong>Atenção:</strong><span class="text-danger"> Não haverá ministério de crianças.</span></p>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="embed-responsive embed-responsive-16by9">
                                <iframe class="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15284.068013613927!2d-49.2823838!3d-16.7260034!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x61499549dba2d3b0!2sMinist%C3%A9rio+Restaurando+Vidas!5e0!3m2!1spt-PT!2sbr!4v1496084668759" width="100%" height="auto" frameborder="0" style="border:0" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</template>

<script>
    import Firebase from 'firebase';
    import messages from '../locale/pt_BR';

    let config = {
        apiKey: "AIzaSyAGKlPlFpu_-fCDTRsXEg2PF2n25J_wPNo",
        authDomain: "cha-de-palavra.firebaseapp.com",
        databaseURL: "https://cha-de-palavra.firebaseio.com",
        projectId: "cha-de-palavra",
        storageBucket: "cha-de-palavra.appspot.com",
        messagingSenderId: "270519227288"
    };

    let app = Firebase.initializeApp(config);
    let db = app.database();
    let ref = db.ref('events/1/inscriptions');

    export default {
        name: 'form',
        firebase: {
            event: ref
        },

        data () {
            return {
                title: 'Cadastro',
                name: '',
                cpf: '',
                dia: '',
                mes: '',
                ano: '',
                telefone: '',
                whatsapp: '',
                casada: '',
                igreja: '',
                igreja_nome: '',
                formSubmitted: false,
            }
        },
        methods: {
            validateBeforeSubmit() {
                this.$validator.validateAll();
                if (!this.errors.any()) {
                    this.addRegister()
                }
            },
            addRegister: function () {
                ref.push(this.register);
                this.formSubmitted = true
            }
        },
        created() {

            this.$validator.updateDictionary({
                pt_BR: {
                    messages,
                    attributes: {
                        name: 'Nome',
                        cpf: 'CPF',
                        dia: 'Dia',
                        mes: 'Mês',
                        ano: 'Ano',
                        nascimento: 'Data de Nascimento',
                        telefone: 'Telefone',
                        whatsapp: 'Whatsapp',
                        casada: 'Estado Civil',
                        igreja: 'Igreja',
                        igreja_nome: 'Nome da Igreja',
                    }
                }
            });
            this.$validator.setLocale('pt_BR');
        },
        computed: {
            nascimento() {
                return `${this.dia}-${this.mes}-${this.ano}`;
            },
            register() {
                return {
                    name: this.name,
                    cpf: this.cpf,
                    nascimento: this.nascimento,
                    telefone: this.telefone,
                    whatsapp: this.whatsapp,
                    casada: this.casada,
                    igreja: this.igreja,
                    igreja_nome: this.igreja_nome,
                    created_at: new Date().toISOString()
                }
            }
        }
    }
</script>

