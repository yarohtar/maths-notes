$R$ is Noetherian iff any ascending chain of ideals $I_1\subset I_2\subset \dots$ eventually terminates.
### Lemma
A ring $R$ is Noetherian iff every ideal $I\triangleleft R$ is finitely generated.
### Hilbert basis theorem
If $R$ is Noetherian, then $R[X]$ is Noetherian.
### Proof
Take an ideal $J$ of $R[X]$ and suppose it is not finitely generated. Find $f_1$ of minimal degree in $J$. Then find $f_n\in J\setminus (f_1\dots f_{n-1})$ of minimal degree. 
Take their leading coefs $a_1,a_2,\dots$ and note that the sequence of ideals $(a_1), (a_1,a_2)\dots$ must terminate i.e. $a_m\in(a_1\dots a_{m-1})$. 
Hence find a polynomial $g\in (f_1\dots f_{m-1})$ of same degree and same leading coef as $f_m$. Now $f_m-g\not\in (f_1\dots f_{m-1})$ but then $f_m$ wasn't of minimal degree - contradiction. So any $J\triangleleft R[X]$ is finitely generated, hence $R[X]$ is Noetherian. 
### Lemma
Any quotient ring of a Noetherian ring is Noetherian.