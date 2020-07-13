<template>
<div class="header">
    <div class="header_l">
        <a href="javascript:;" class="logoLink"><img src="./logo.png" alt="logo" />知心购</a>
    </div>
    <div class="header_r">
        <div class="headr_d1">
            <side-collapse class="sidecoll"></side-collapse>
        </div>
        <div class="headr_d2">
            <ul class="headrUl clearFixed">
                <li>
                    <full-screen></full-screen>
                </li>
                <li>
                    <user-dropdown></user-dropdown>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
import SideCollapse from '@/components/SideCollapse'
import UserDropdown from '@/components/UserDropdown'
import FullScreen from '@/components/FullScreen'
export default {
    components: {
        SideCollapse,
        UserDropdown,
        FullScreen
    }
}
</script>