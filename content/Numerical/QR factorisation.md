$QR$ factorisation of a $m\times n$ matrix $A$ is $A=QR$ 
where $Q$ is a $m\times m$ square orthogonal matrix 
and $R$ is $m\times n$ upper triangular. 
If $m>n$, we can have a reduced $QR$ factorisation 
with $Q$ being $m\times n$ and $R$ being $n\times n$, 
where the columns of $Q$ are orthogonal. 

One method for obtaining the $QR$ factorisation 
is the classic [[Algebra/Vector Spaces/Gram-Schmidt process]], where
$$b_j=a_j-\sum_{i=1}^{j-1}{R_{ij}\over ||b_i||}b_i$$
with $q_i={b_i\over ||b_i||}$ and $R_{ij}=\braket{ q_{i} | a_{j} }$ for $i<j$ and $R_{jj}=||b_j||$.

## Givens rotation
Use [[Numerical/Givens Rotation]] to introduce $0$s from left to right.
## Householder reflections
Take a [[Numerical/Householder Reflection]] $H_{u}$
where $u=a-b$ for 
$a=(a_1,\dots, a_k,\dots a_n)$ and $b=(a_1,\dots, a_{k-1}, \gamma,0,\dots,0)$ 
We find $u=(0,\dots,0,a_k-\gamma,a_{k+1}\dots,a_n)$ where $\gamma=\sqrt{\sum_{i=k}^na_i^2}$. 
Then:
$$
H_{u}a=b
$$
Thus $H_u$ doesn't affect the first $k-1$ rows and columns of a matrix, 
and if $a$ is the $k$-th column, we have $H_ua=b$ so we introduced $0$s to the $k$-th column. 
