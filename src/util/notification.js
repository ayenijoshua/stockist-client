import toastr from 'toastr'

export const notification = {
    error(msg){
        return toastr.error(msg)
    },
    warning(msg){
        return toastr.warning(msg)
    },
    success(msg){
        return toastr.success(msg)
    }
}