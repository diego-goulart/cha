<template>
    <div class="container">
        <div class="page-header">
            <h1>{{title}}</h1>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>Últimos Eventos</h3>
            </div>
            <div class="panel-body">
                <table class="table table-striped">
                    <thead>
                    <tr>
                        <td>Evento</td>
                        <td>Data</td>
                        <td>Inscritos | Vagas</td>
                        <td>Status</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="event in events">
                        <td>{{event.name}}</td>
                        <td>{{event.date}}</td>
                        <td>{{event.inscriptions.length -1}} | {{event.spots}}</td>
                        <td>{{event.status}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import Firebase from 'firebase';

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

    let eventsRef = db.ref('events');

    export default {
        name: 'dashboard',
        firebase: {
            events: eventsRef
        },
        data () {
            return {
                title: 'Dashboard',
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
