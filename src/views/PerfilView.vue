<script setup>
</script>

<template>
<section class="card">
<h2 class="title_card">Kennedy Araújo</h2>
<ul class="infos_card">
    <li>
        CPF: 011.201.321-45
    </li>
    <li>
        CEP: 67.800.912
    </li>
    <li>
        Telefone: +55 47 9 5467-9814
    </li>
    <li>
        Tipo Sanguineo: A+
    </li>
    <li>
        Email: kennedyA@gmail.com
    </li>
</ul>
</section>

<section class="consultas">
<h3 class="title_c">
    Sua consulta é hoje!
</h3>
<p class="avi_c">
 Consulta marcada
</p>
 <ul>
    <li>
        Tipo: Exame de Sangue
    </li>
    <li>
        Hora: 10:30h
    </li>
    <li>
        Dr. Fábio Longo de Moura
    </li>
    <li>
        Local: Hospital São Bernadinho
    </li>
 </ul>
</section>

<section class="vac">
    <h3 class="title_vac"> Histórico de Vacinas</h3>
    <ul>
        <li class="tipo_vac">
            <h4>Dengue</h4>
            <ul>
                <li>
                    Dia: 17 / 03 / 26
                </li>
                <li>
                    Horário: 11:05
                </li>
                <li>
                    Local: Hospital São Bernadino
                </li>
            </ul>
        </li>

        <li class="tipo_vac">
           <h4>Covid-19</h4>
            <ul>
                <li>
                    Dia: 03 / 02 / 26
                </li>
                <li>
                    Horário: 08:45
                </li>
                <li>
                    Local: Hospital São José
                </li>
            </ul>
        </li>

        <li class="tipo_vac">
            <h4>Gripe</h4>
            <ul>
                <li>
                    Dia: 24 / 02 / 26
                </li>
                <li>
                    Horário: 09:05
                </li>
                <li>
                    Local: Hospital Santa Helena
                </li>
            </ul>
        </li>

        <li class="sm">
            <a href="#">SAIBA MAIS</a>
        </li>
    </ul>
</section>

</template>

<style scoped>

.card{
    margin: 40px;
}

.title_card{
    font-size: 2.3rem;
    font-weight: bolder;
}

.infos_card{
    gap: 4px;
    font-size: 1.2rem;
}   

.consultas{
    box-shadow: 2px;
}

.tilte_c{
    background-color: blue;
    border-radius: 5px;
    font-size: 2rem;
}

.avi_c{
font-weight: bolder;
font-size: 1.2rem;
}

.vac{
    box-shadow: 2px;
}

.title_vac{
    font-size: 2.5rem;
    font-weight: bolder;
}

.tipo_vac{
    box-shadow: 2px;
}

h4{
    font-family: 1.8rem;
}

.sm{
font-size: 0.8rem;
color: gray;

}
</style>