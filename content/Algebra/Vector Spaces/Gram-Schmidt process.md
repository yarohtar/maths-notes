Given a [[Algebra/Vector Spaces/Vector Space]] $V$ with inner product $(\cdot,\cdot)$ 
and [[Numerical/Linearly Independent]] vectors $v_1,\dots,v_n$
we find
$$
b_n=v_n-\sum_{k=1}^{n-1}{(v_n,b_k)\over (b_k,b_k)}b_k
$$
Then all $b_n$ are orthogonal, i.e. $(b_i,b_j) =0$ for $i\neq j$.
To normalize them, take $e_n={b_n\over \sqrt{(b_n,b_n)}}$
If additionally $n=\operatorname{dim}V$, then $e_{n}$ will be the [[Analysis/Orthonormal Basis]]

