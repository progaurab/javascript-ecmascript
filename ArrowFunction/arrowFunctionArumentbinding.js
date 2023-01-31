// Argument Binding with Arrow Function

let nums1 = function() {
    console.log(arguments);
}

nums1(9,8,5,3,2);


let nums2 = (...n) => console.log(n);
nums2(9,8,5,3,2);