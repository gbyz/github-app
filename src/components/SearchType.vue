<template>
<div id="searchType">
            <div class="panel panel-default">
                <ul class="list-group">
                    <a href="#" class="list-group-item">Repositories</a>
                    <a href="#" class="list-group-item">Users</a>
                
                </ul>
            </div>
</div>
    
</template>
<script>
export default {
    
}
</script>
<style>
body
{
    padding-top: 20px;
    background-color: #F7F7F7;
}
.panel > .list-group
{
    margin-bottom: 0;
}
.panel > .list-group .list-group-item
{
    border-width: 1px 0;
}
.panel > .list-group .list-group-item:first-child
{
    border-top-right-radius: 0;
    border-top-left-radius: 0;
}
.panel > .list-group .list-group-item:last-child
{
    border-bottom: 0;
}
.panel-heading + .list-group .list-group-item:first-child
{
    border-top-width: 0;
}
.panel-default .list-group-item.active
{
    color: #000;
    background-color: #DDD;
    border-color: #DDD;
}
.panel a.list-group-item.active:hover, a.list-group-item.active:focus
{
    color: #000;
    background-color: #DDD;
    border-color: #DDD;
}

</style>

