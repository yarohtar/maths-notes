There are two forms we usually consider for [[Numerical/Linear Program]]
All these are equivalent (by changing signs, adding slack, etc.)
### General form
" Minimize $c^Tx$ over $x\in \mathbb{R}^{n}$ subject to $Ax\leq b$. "
where $A\in \mathbb{R}^{n\times m}$, $b\in \mathbb{R}^{m}$ and $c\in \mathbb{R}^{n}$

### Standard form
" Minimize $c^Tx$ subject to $Ax=b$ and $x\geq 0$. "

We can always rewrite the general form into standard form 
by adding a slack variable 
and noting that we can express $x$ as $x_+-x_-$ where $x_+,x_-\geq 0$:
