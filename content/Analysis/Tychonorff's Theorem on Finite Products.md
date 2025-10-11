Finite products of compact spaces are compact
#### Proof
Enough to show for product of 2 components. 
Let $X,Y$ be compact, and let $\mathcal U$ cover $X\times Y$. 
Fix $x\in X$ and for all $y$ find $W_{xy}\in \mathcal U$ s.t. $(x,y)\in W_{xy}$. 
Now find open nbds $U_y$ of $x$ and $V_y$ of $y$ in $X$ and $Y$ respectively 
s.t. $U_y\times V_y\subseteq W_y$. 
Now $V_y$ cover $Y$ so find a finite $F_Y\subseteq Y$ s.t. $\bigcup_{y\in F_Y} V_y=Y$. 
Hence define $T_x=\bigcup_{y\in F_Y} U_y$.
Now $T_x$ will cover $X$ so find finite $F_X$ ... now cover $X\times Y$ with these. 