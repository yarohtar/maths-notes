Used to approximate derivatives. Given small $h$ we find 
$$
\Delta_{h}g(x)=g(x+h)-g(x)\approx hg'(x)
$$
We can go further:
$$
g(x+h)-g(x)=hg'(x)+\frac{h^2}{2}g''(x)+\frac{h^3}{6}g'''(x)+O(h^4)
$$
$$
g(x-h)-g(x)=-hg'(x)+\frac{h^2}{2}g''(x)-\frac{h^3}{6}g'''(x)+O(h^4)
$$
Now add these up together:
$$
g(x-h)-2g(x)+g(x+h)=h^2g''(x)+O(h^4)
$$
It is useful to remember:
$$
\frac{1}{h^2}[g(x-h)-2g(x)+g(x+h)]=g''(x)+\frac{1}{12}h^2g^{(4)}(x)+\frac{1}{360}h^4g^{(6)}(x)+O(h^6)
$$
