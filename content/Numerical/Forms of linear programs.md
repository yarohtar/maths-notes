Problems of the form
Minimize $c^Tx$ subject to:
$a_i^Tx\leq b_i$ for $i\in M_1$
$a_i^Tx\geq b_i$ for $i\in M_2$
$a_i^Tx= b_i$ for $i\in M_3$
$x_j\geq 0$ for $j\in N_1$
$x_j\leq 0$ for $j\in N_2$

### General form
We can always rewrite a linear program in general form:
Minimize $c^Tx$ subject to $Ax\leq b$.

### Standard form
Furthermore, we can always rewrite the general form into standard form by adding a slack variable and noting that we can express $x$ as $x_+-x_-$ where $x_+,x_-\geq 0$:
Minimize $c^Tx$ subject to $Ax=b$ and $x\geq 0$.
