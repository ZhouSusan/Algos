/*Given a chessboard, with each title has a height, find the maximun volume it can hold. */

#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

//The general approach:
//I will be utilizing a floodfill algorithm to attempt to fill the tiles with water.
//Each tile will be marked as either done or not done. The edges will begin in "done" state.
//I will be adding the edges to an array, sorting the array in ascending order then iterating through 
//the list and floodfilling on each edge tile. 
//When a non-edge tile is filled in this way it will be marked as "done". 
//Tiles marked as "done" will not be filled again.
//I will be marking tiles as done when the filling tile is both smaller and done. 
//As that tile will now how an outlet to the edge.
//After iterating through the list we may have leftover islands the process will be repeated. 
//First checking for edges. The tiles that have a "done" neighbor are edges. 
//Adding those to the array, and repeating the process.
//The repeating process will stop at 4 repetitions. 
//Because this is an 8x8 matrix it is impossible to require more than 4.


//Edge class to keep the information easy to access.
class Edge {
public:
    int i;
    int j;
    int floor;
    Edge(int a, int b, int water) {
        i = a;
        j = b;
        floor = water;
    }
};
//Compare function for sorting.
bool compare(Edge a, Edge b) {
    return a.floor < b.floor;
}

int** floodFillRec(int** wetboard, bool** done, int i, int j, int water) {
    int oldWaterLevel = wetboard[i][j];

    if(water < oldWaterLevel) {
    //Whenever a lower tile is trying to fill us up, we need to be done and also cascade done to any tiles bigger than or equal than us.

    done[i][j] = true;

    if(i - 1 >= 0 && !done[i-1][j] && wetboard[i-1][j] >= wetboard[i][j]) {
    wetboard = floodFillRec(wetboard, done, i-1, j, water);
    }
    if(i + 1 < 8 && !done[i+1][j] && wetboard[i+1][j] >= wetboard[i][j]) {
        wetboard = floodFillRec(wetboard, done, i+1, j, water);
    }
    if(j - 1 >= 0 && !done[i][j-1] && wetboard[i][j-1] >= wetboard[i][j]) {
        wetboard = floodFillRec(wetboard, done, i, j-1, water);
    }
    if(j + 1 < 8 && !done[i][j+1] && wetboard[i][j+1] >= wetboard[i][j]) {
        wetboard = floodFillRec(wetboard, done, i, j+1, water);
    }
        return wetboard;
    }

    wetboard[i][j] = water;
    done[i][j] = true;

    if(i - 1 >= 0 && !done[i-1][j]) {
        wetboard = floodFillRec(wetboard, done, i-1, j, water);
    }
    if(i + 1 < 8 && !done[i+1][j]) {
        wetboard = floodFillRec(wetboard, done, i+1, j, water);
    }
    if(j - 1 >= 0 && !done[i][j-1]) {
        wetboard = floodFillRec(wetboard, done, i, j-1, water);
    }
    if(j + 1 < 8 && !done[i][j+1]) {
        wetboard = floodFillRec(wetboard, done, i, j+1, water);
    }

    return wetboard;
}

int chessVolume(int board[8][8]) {

  //create deep copy to compare to original later.
    int** wetBoard = new int*[8];
    bool** done = new bool*[8];
    
    for(int i = 0; i < 8 ; i++ ) {
        wetBoard[i] = new int[8];
        done[i] = new bool[8];
        for(int j = 0; j < 8; j++) {
            wetBoard[i][j] = board[i][j];
            }
        }
        
        std::vector<Edge> edges;
        
        for(int i = 0; i < 8 ; i++ ) {
            for(int j = 0; j < 8; j++) {
            if(i == 0 || i == 7 || j == 0 || j == 7) {
                Edge newEdge(i,j,board[i][j]);
                edges.push_back(newEdge);
                done[i][j] = true;
            } else {
                done[i][j] = false;
            }
        }
    }
    

  //Count is here as insurance against big pillars. 4 should be the maximum number of iterations required for an 8x8 board.
int count = 0;
    while (!edges.empty() && count < 4) {
    count++;
    //sort the edges.
    std::sort(edges.begin(), edges.end(), compare);

    //Now that the edges are sorted and our boolean matrix is ready, we can begin floodfilling.

    for( Edge edge: edges) {
        wetBoard = floodFillRec(wetBoard, done, edge.i, edge.j, edge.floor);
    }

    //clear the vector and shrink to fit.
    edges.clear();
    edges.shrink_to_fit();

    //Creating new Edges. Those tiles adjacent to tiles that are not done yet.

    for(int i = 0; i < 8 ; i++ ) {
        for(int j = 0; j < 8; j++) {
            if(done[i][j] == false) {
            if(done[i-1][j] == true) {
                Edge newEdge(i-1,j,board[i-1][j]);
                edges.push_back(newEdge);
            }
            if(done[i+1][j] == true) {
                Edge newEdge(i+1,j,board[i+1][j]);
                edges.push_back(newEdge);
            }
            if(done[i][j-1] == true) {
                Edge newEdge(i,j-1,board[i][j-1]);
                edges.push_back(newEdge);
            }
            if(done[i][j+1] == true) {
                Edge newEdge(i,j+1,board[i][j+1]);
                edges.push_back(newEdge);
            }
            }
        }
        }
    }

    //The final step is to compare the wetboard with the chessboard
    int total = 0;
    for(int i = 0; i < 8 ; i++ ) {
        for(int j = 0; j < 8; j++) {
            total += wetBoard[i][j] - board[i][j];
        }
        }

    return total;
}

// To execute C++, please define "int main()"
int main() {
  //Used onlinemathtools's generate random matrix to create.
  // int chessboard [8][8] = {
  //   {9 ,9 ,4 ,5 ,7 ,2 ,2 ,4},
  //   {4 ,7 ,8 ,3 ,1 ,4 ,7 ,5},
  //   {4 ,2 ,2 ,6 ,5 ,1 ,2 ,4},
  //   {8 ,4 ,7 ,8 ,3 ,3 ,2 ,6},
  //   {5 ,9 ,3 ,7 ,5 ,7 ,7 ,1},
  //   {4 ,8 ,3 ,3 ,9 ,4 ,3 ,1},
  //   {8 ,3 ,7 ,2 ,9 ,7 ,9 ,8},
  //   {3 ,5 ,4 ,2 ,7 ,8 ,5 ,8}
  // };

int chessboard [8][8] = {
{3 ,3 ,3 ,3 ,3 ,3 ,3 ,3},
{3 ,1 ,4 ,4 ,4 ,4 ,1 ,3},
{3 ,1 ,4 ,4 ,4 ,4 ,1 ,3},
{3 ,1 ,4 ,1 ,1 ,4 ,1 ,3},
{3 ,1 ,4 ,1 ,1 ,4 ,1 ,3},
{3 ,1 ,4 ,4 ,4 ,4 ,1 ,3},
{3 ,1 ,4 ,4 ,4 ,4 ,1 ,3},
{3 ,3 ,3 ,3 ,3 ,3 ,3 ,3}
};

//This is here to print the result.
cout << chessVolume(chessboard) << endl;
}

