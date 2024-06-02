<template>

  <div class="container">

    <div class="row align-items-center">
      <div class="col-xl-12 col-lg-12 col-md-12 col-12">
        <nav class="nav-disp">
<!--          <router-link to="/abonements">Абонементы</router-link>-->
<!--          |-->
<!--          <router-link to="/clients">Клиенты</router-link>-->
<!--          |-->
<!--          <router-link to="/activities">Занятия</router-link>-->
        </nav>
<!--        <div class="pt-20 rounded-top" style="background:url(https://bootdey.com/image/480x480/FF00FF/000000) no-repeat; background-size: cover;">-->



<!--        </div>-->
        <div class="card rounded-bottom smooth-shadow-sm">
          <div class="d-flex align-items-center justify-content-between
                  pt-4 pb-6 px-4">
            <!-- avatar -->
            <div class="d-flex align-items-center">
              <div class="avatar-xxl avatar-indicators avatar-online me-2
                      position-relative d-flex justify-content-end
                      align-items-end mt-n10">
<!--                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="avatar-xxl-->
<!--                        rounded-circle border border-2 " alt="Image">-->
<!--                <a href="#!" class="position-absolute top-0 right-0 me-2">-->
<!--                  <img src="https://dashui.codescandy.com/dashuipro/assets/images/svg/checked-mark.svg" alt="Image" class="icon-sm">-->
<!--                </a>-->
              </div>
              <!-- content -->
              <div class="lh-1">
                <h2 class="mb-0">{{user['firstname']}} {{user['lastname']}}
                  <a href="#!" class="text-decoration-none">
                  </a>
                </h2>
              </div>
            </div>
            <div>
              <!-- button -->
<!--              <a href="#" class="btn btn-outline-primary-->
<!--                      d-none d-md-block">Edit Profile</a>-->
            </div>
          </div>
          <!-- nav -->
          <ul class="nav nav-lt-tab px-4" id="pills-tab" role="tablist">

          </ul>
        </div>
      </div>
    </div>
    <h4>Ваши занятия</h4>

    <table>
      <thead>
      <tr>
        <th>Номер</th>
        <th>Дата</th>
        <th>Время начала</th>
        <th>Время окончания</th>
        <th>Имя тренера</th>
        <th>Тип бассейна</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="el in user_activities">
        <td>{{el['id']}}</td>
        <td>{{el['date']}}</td>
        <td>{{el['start_time']}}</td>
        <td>{{el['end_time']}}</td>
        <td>{{el['trainer']['firstname']}}</td>
        <td>{{el['poolType']['type']}}</td>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters.GET_CUR_USER
    },
    user_activities(){
      console.log(this.$store.getters.GET_ACTIVITIES_FOR_USER)
      return this.$store.getters.GET_ACTIVITIES_FOR_USER
    }

  },
}
</script>