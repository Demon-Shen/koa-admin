$.extend({
    /**
     * form数据填充
     *
     * return: false
     *
     * @param {data,url,method="post",type=0} 
     */
    fillForm :function({data,action,method="post",type=0}){
        $(`form`).attr({
            method,
            action
        })
        $(`form input[type="text"],form textarea`).text('')
        $(`form input[type="checkbox"]`).attr('checked',false)
        for(var key in data){
            
            Array.isArray(data[key]) ? data[key].forEach(ele=>{
                $(`form input[type="checkbox"][name=${data[key]}]`).attr('checked',true)
            }):''
            $(`form input[name="${key}"][type="text"],form input[name="${key}"][type="hidden"]`).val(data[key])
            $(`form textarea[name="${key}"]`).text(data[key])
            
            $(`form input[type="radio"][name="${key}"][value="${data[key]}"]`).attr('checked',true)
            $(`form select option[value="${data[key]}"]`).attr('checked',true)
        }
        layui.form.render()
    }
})