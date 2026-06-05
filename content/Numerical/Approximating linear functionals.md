Suppose we have a linear functional $L$. 
We want to approximate it by:
$$L(f)=\sum_{k=1}^n b_kf(c_k)$$
Then using [[Numerical/Lagrange Cardinal Polynomials]] we find:
$$L(f)\approx L\left(\sum_{k=1}^nf(c_k)l_k\right)=\sum_{k=1}^nL(l_k)f(c_k) $$
so we choose $b_k=L(l_k)$.
